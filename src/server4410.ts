
const express = require('express')
import {handler4410} from "./handler4410";
const app = express()
app.get('/4410', handler4410)
app.listen(3000, () => {})
        