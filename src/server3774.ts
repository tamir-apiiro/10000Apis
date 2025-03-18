
const express = require('express')
import {handler3774} from "./handler3774";
const app = express()
app.get('/3774', handler3774)
app.listen(3000, () => {})
        