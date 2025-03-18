
const express = require('express')
import {handler857} from "./handler857";
const app = express()
app.get('/857', handler857)
app.listen(3000, () => {})
        