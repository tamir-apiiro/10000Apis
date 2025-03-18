
const express = require('express')
import {handler122} from "./handler122";
const app = express()
app.get('/122', handler122)
app.listen(3000, () => {})
        