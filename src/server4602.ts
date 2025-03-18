
const express = require('express')
import {handler4602} from "./handler4602";
const app = express()
app.get('/4602', handler4602)
app.listen(3000, () => {})
        