
const express = require('express')
import {handler3410} from "./handler3410";
const app = express()
app.get('/3410', handler3410)
app.listen(3000, () => {})
        