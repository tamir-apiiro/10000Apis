
const express = require('express')
import {handler2363} from "./handler2363";
const app = express()
app.get('/2363', handler2363)
app.listen(3000, () => {})
        