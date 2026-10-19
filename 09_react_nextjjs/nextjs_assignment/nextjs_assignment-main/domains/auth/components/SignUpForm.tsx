'use client';

import { useActionState, useState, type ChangeEvent, } from 'react';
import { INITIAL_ACTION_STATE } from '@/shared/types/action.types';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { FiAlertCircle } from 'react-icons/fi';
import { signUpAction } from '../actions/signup.actions';

const initialForm = {
  email: '',
  name: '',
  password: '',
  passwordConfirm: '',
};


export default function SignUpForm(): React.JSX.Element {
    const [state, formAction, isPending] = useActionState(
        signUpAction,
        INITIAL_ACTION_STATE
    );

    const[form,setForm] = useState(initialForm);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({...prev, [e.target.name]:e.target.value}));
    };

    return (
        <div>
            {state.message && !state.success && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 p-3.5 text-xs font-medium text-red-600">
                    <FiAlertCircle className="h-4 w-4 shrink-0" />
                    <span>{state.message}</span>
                </div>
            )}

            <form action={formAction} noValidate autoComplete="off">
                <div className="flex mb-2 items-center">
                    <label className="basis-30">이메일</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="이메일을 입력하세요."
                        value={form.email}
                        onChange={onChange}
                    />
                </div>

                {state.errors?.email && (
                    <div className="text-red-200 mb-4">
                        {state.errors.email}
                        </div>
                )}


                <div className="flex mb-2 items-center">
                    <label className="basis-30">회원명</label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="회원명을 입력하세요."
                        value={form.name}
                        onChange={onChange}
                    />
                </div>
                {state.errors?.name && (
                    <div className="text-red-200 mb-4">
                        {state.errors.name}
                        </div>
                )}

                <div className="flex mb-2 items-center">
                    <label className="basis-30">비밀번호</label>
                    <Input
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        placeholder="비밀번호를 입력하세요."
                        value={form.password}
                        onChange={onChange}
                    />
                </div>
                {state.errors?.password && (
                    <div className="text-red-200 mb-4">
                        {state.errors.password}
                        </div>
                )}

                <div className="flex mb-2 items-center">
                    <label className="basis-30">비밀번호 확인</label>
                    <Input
                        type="password"
                        name="passwordConfirm"
                        autoComplete="new-password"
                        placeholder="비밀번호를 입력하세요."
                        value={form.passwordConfirm}
                        onChange={onChange}
                    />
                </div>
                {state.errors?.passwordConfirm && (
                    <div className="text-red-200 mb-4">
                        {state.errors.passwordConfirm}
                        </div>
                )}

                <Button type="submit" disabled={isPending}>
                    {isPending ? '처리중...' : '가입하기'}
                </Button>
            </form>
        </div>
    );
}
