
const express = require('express')
import {handler7237} from "./handler7237";
const app = express()
app.get('/7237', handler7237)
app.listen(3000, () => {})
        