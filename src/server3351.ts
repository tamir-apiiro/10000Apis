
const express = require('express')
import {handler3351} from "./handler3351";
const app = express()
app.get('/3351', handler3351)
app.listen(3000, () => {})
        