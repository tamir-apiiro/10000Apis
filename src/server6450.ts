
const express = require('express')
import {handler6450} from "./handler6450";
const app = express()
app.get('/6450', handler6450)
app.listen(3000, () => {})
        