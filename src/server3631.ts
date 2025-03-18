
const express = require('express')
import {handler3631} from "./handler3631";
const app = express()
app.get('/3631', handler3631)
app.listen(3000, () => {})
        