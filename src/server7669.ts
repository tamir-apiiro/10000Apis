
const express = require('express')
import {handler7669} from "./handler7669";
const app = express()
app.get('/7669', handler7669)
app.listen(3000, () => {})
        