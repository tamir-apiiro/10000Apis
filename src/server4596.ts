
const express = require('express')
import {handler4596} from "./handler4596";
const app = express()
app.get('/4596', handler4596)
app.listen(3000, () => {})
        