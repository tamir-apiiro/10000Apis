
const express = require('express')
import {handler8450} from "./handler8450";
const app = express()
app.get('/8450', handler8450)
app.listen(3000, () => {})
        