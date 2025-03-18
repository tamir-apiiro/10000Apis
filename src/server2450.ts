
const express = require('express')
import {handler2450} from "./handler2450";
const app = express()
app.get('/2450', handler2450)
app.listen(3000, () => {})
        