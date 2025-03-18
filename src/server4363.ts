
const express = require('express')
import {handler4363} from "./handler4363";
const app = express()
app.get('/4363', handler4363)
app.listen(3000, () => {})
        