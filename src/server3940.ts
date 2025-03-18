
const express = require('express')
import {handler3940} from "./handler3940";
const app = express()
app.get('/3940', handler3940)
app.listen(3000, () => {})
        