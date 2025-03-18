
const express = require('express')
import {handler4531} from "./handler4531";
const app = express()
app.get('/4531', handler4531)
app.listen(3000, () => {})
        