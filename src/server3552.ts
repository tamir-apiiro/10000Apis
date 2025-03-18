
const express = require('express')
import {handler3552} from "./handler3552";
const app = express()
app.get('/3552', handler3552)
app.listen(3000, () => {})
        