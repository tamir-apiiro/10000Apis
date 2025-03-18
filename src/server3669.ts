
const express = require('express')
import {handler3669} from "./handler3669";
const app = express()
app.get('/3669', handler3669)
app.listen(3000, () => {})
        