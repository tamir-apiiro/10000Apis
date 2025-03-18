
const express = require('express')
import {handler6568} from "./handler6568";
const app = express()
app.get('/6568', handler6568)
app.listen(3000, () => {})
        