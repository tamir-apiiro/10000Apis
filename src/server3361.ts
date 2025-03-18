
const express = require('express')
import {handler3361} from "./handler3361";
const app = express()
app.get('/3361', handler3361)
app.listen(3000, () => {})
        