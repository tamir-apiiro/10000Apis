
const express = require('express')
import {handler7499} from "./handler7499";
const app = express()
app.get('/7499', handler7499)
app.listen(3000, () => {})
        