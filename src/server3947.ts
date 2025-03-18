
const express = require('express')
import {handler3947} from "./handler3947";
const app = express()
app.get('/3947', handler3947)
app.listen(3000, () => {})
        