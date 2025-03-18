
const express = require('express')
import {handler4101} from "./handler4101";
const app = express()
app.get('/4101', handler4101)
app.listen(3000, () => {})
        