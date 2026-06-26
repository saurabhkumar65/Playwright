{
  "compileOnSave": false,
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "esnext",
    "lib": [
      "es2017",
      "es2019",
      "es2016",
      "dom"
    ],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@core/advanced-search": [
        "libs/core/pages/advanced-search/src/index.ts"
      ],
      "@core/auth": [
        "libs/core/auth/src/index.ts"
      ],
      "@core/data-access": [
        "libs/core/data-access/core/src/index.ts"
      ],
      "@core/interceptors": [
        "libs/core/interceptors/src/index.ts"
      ],
      "@core/playgrounds-advanced-search": [
        "libs/core/playgrounds/advanced-search/src/index.ts"
      ],
      "@core/playgrounds-composite-forms": [
        "libs/core/playgrounds/composite-forms/src/index.ts"
      ],
      "@core/playgrounds-concurrency-failure": [
        "libs/core/playgrounds/concurrency-failure/src/index.ts"
      ],
      "@core/playgrounds-correspondence-widget": [
        "libs/core/playgrounds/correspondence-widget/src/index.ts"
      ],
      "@pre-underwriting-portal/inbox-submission": [
        "libs/workflows/pre-underwriting-portal/feature/inbox-submission/src/index.ts"
      ],
      "@pre-underwriting-portal/shared/components": [
        "libs/workflows/pre-underwriting-portal/shared/components/src/index.ts"
      ],
      "@pre-underwriting-portal/shared/constants": [
        "libs/workflows/pre-underwriting-portal/shared/components/src/lib/constants/index.ts"
      ],
      "@pre-underwriting-portal/shared/enums": [
        "libs/workflows/pre-underwriting-portal/shared/components/src/lib/enums/index.ts"
      ],
      "@pre-underwriting-portal/shared/models": [
        "libs/workflows/pre-underwriting-portal/shared/components/src/lib/models/index.ts"
      ],
      "@pre-underwriting-portal/shared/services": [
        "libs/workflows/pre-underwriting-portal/shared/services/src/index.ts"
      ],
      "@pre-underwriting-portal/submission": [
        "libs/workflows/pre-underwriting-portal/feature/submission/src/index.ts"
      ],
      "@pre-underwriting-portal/submission/models": [
        "libs/workflows/pre-underwriting-portal/feature/submission/src/lib/models/index.ts"
      ],
      "@shared/auth-data-access": [
        "libs/shared/auth-data-access/src/index.ts"
      ],
      "@shared/common-utils": [
        "libs/shared/common-utils/src/index.ts"
      ],
      "@shared/composite-forms": [
        "libs/shared/composite-forms/src/index.ts"
      ],
      "@shared/composite-forms-utils": [
        "libs/shared/composite-forms-utils/src/index.ts"
      ],
      "@shared/correspondence-data-access": [
        "libs/shared/correspondence-data-access/src/index.ts"
      ],
      "@shared/correspondence-widget": [
        "libs/shared/correspondence-widget/src/index.ts"
      ],
      "@shared/data-access-api": [
        "libs/shared/data-access-api/src/index.ts"
      ],
      "@shared/employees-data-access": [
        "libs/shared/employees-data-access/src/index.ts"
      ],
      "@shared/employees-utils": [
        "libs/shared/employees-utils/src/index.ts"
      ],
      "@shared/environments-utils": [
        "libs/shared/environments-utils/src/index.ts"
      ],
      "@shared/flows-data-access": [
        "libs/shared/flows-data-access/src/index.ts"
      ],
      "@shared/forms-utils": [
        "libs/shared/forms-utils/src/index.ts"
      ],
      "@shared/messages": [
        "libs/shared/messages/src/index.ts"
      ],
      "@shared/messages-data-access": [
        "libs/shared/messages-data-access/src/index.ts"
      ],
      "@shared/messages-utils": [
        "libs/shared/messages-utils/src/index.ts"
      ],
      "@shared/nav": [
        "libs/shared/nav/src/index.ts"
      ],
      "@shared/notes-data-access": [
        "libs/shared/notes-data-access/src/index.ts"
      ],
      "@shared/query-builder": [
        "libs/shared/query-builder/src/index.ts"
      ],
      "@shared/tasks-data-access": [
        "libs/shared/tasks-data-access/src/index.ts"
      ],
      "@shared/user-data-access": [
        "libs/shared/user-data-access/src/index.ts"
      ],
      "@shared/work-items-data-access": [
        "libs/shared/work-items-data-access/src/index.ts"
      ],
      "@shared/work-items-utils": [
        "libs/shared/work-items-utils/src/index.ts"
      ],
      "@ui/assets": [
        "libs/ui/assets/src/index.ts"
      ],
      "@ui/components": [
        "libs/ui/components/src/index.ts"
      ],
      "@ui/directives": [
        "libs/ui/directives/src/index.ts"
      ],
      "@ui/pipes": [
        "libs/ui/pipes/src/index.ts"
      ],
      "@ui/storybook-host": [
        "libs/ui/storybook-host/src/index.ts"
      ],
      "@ui/utils": [
        "libs/ui/utils/src/index.ts"
      ],
      "@uwwb-portal/advanced-search": [
        "libs/workflows/uwwb-portal/feature/advanced-search/src/index.ts"
      ],
      "@uwwb-portal/auth-control": [
        "libs/workflows/uwwb-portal/feature/auth-control/src/index.ts"
      ],
      "@uwwb-portal/beazleyflex": [
        "libs/workflows/uwwb-portal/feature/beazleyflex/src/index.ts"
      ],
      "@uwwb-portal/beazleyflex-data-access": [
        "libs/workflows/uwwb-portal/data-access/beazleyflex/src/index.ts"
      ],
      "@uwwb-portal/controls": [
        "libs/workflows/uwwb-portal/feature/controls/src/index.ts"
      ],
      "@uwwb-portal/controls-data-access": [
        "libs/workflows/uwwb-portal/data-access/controls/src/index.ts"
      ],
      "@uwwb-portal/dashboard": [
        "libs/workflows/uwwb-portal/feature/dashboard/src/index.ts"
      ],
      "@uwwb-portal/dashboard-data-access": [
        "libs/workflows/uwwb-portal/data-access/dashboard/src/index.ts"
      ],
      "@uwwb-portal/data-access/landing-page": [
        "libs/workflows/uwwb-portal/data-access/landing-page/src/index.ts"
      ],
      "@uwwb-portal/data-access/renewal-record": [
        "libs/workflows/uwwb-portal/data-access/renewal-record/src/index.ts"
      ],
      "@uwwb-portal/data-access/search": [
        "libs/workflows/uwwb-portal/data-access/search/src/index.ts"
      ],
      "@uwwb-portal/data-access/team-inbox": [
        "libs/workflows/uwwb-portal/data-access/team-inbox/src/index.ts"
      ],
      "@uwwb-portal/inbox": [
        "libs/workflows/uwwb-portal/feature/inbox/src/index.ts"
      ],
      "@uwwb-portal/inbox-data-access": [
        "libs/workflows/uwwb-portal/data-access/inbox/src/index.ts"
      ],
      "@uwwb-portal/landing-page": [
        "libs/workflows/uwwb-portal/feature/landing-page/src/index.ts"
      ],
      "@uwwb-portal/quotes-data-access": [
        "libs/workflows/uwwb-portal/data-access/quotes/src/index.ts"
      ],
      "@uwwb-portal/rating": [
        "libs/workflows/uwwb-portal/feature/rating/src/index.ts"
      ],
      "@uwwb-portal/rating-data-access": [
        "libs/workflows/uwwb-portal/data-access/rating/src/index.ts"
      ],
      "@uwwb-portal/referrals": [
        "libs/workflows/uwwb-portal/feature/referrals/src/index.ts"
      ],
      "@uwwb-portal/renewal-record": [
        "libs/workflows/uwwb-portal/feature/renewal-record/src/index.ts"
      ],
      "@uwwb-portal/search": [
        "libs/workflows/uwwb-portal/feature/search/src/index.ts"
      ],
      "@uwwb-portal/shared-data-access": [
        "libs/workflows/uwwb-portal/data-access/shared/src/index.ts"
      ],
      "@uwwb-portal/shared-pipes": [
        "libs/workflows/uwwb-portal/shared/pipes/src/index.ts"
      ],
      "@uwwb-portal/shared/components": [
        "libs/workflows/uwwb-portal/shared/components/src/index.ts"
      ],
      "@uwwb-portal/shared/services": [
        "libs/workflows/uwwb-portal/shared/services/src/index.ts"
      ],
      "@uwwb-portal/team-inbox": [
        "libs/workflows/uwwb-portal/feature/team-inbox/src/index.ts"
      ]
    },
    "useDefineForClassFields": false
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "exclude": [
    "node_modules",
    "tmp"
  ]
}
