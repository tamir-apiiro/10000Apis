
const express = require('express')
import {handler341} from "./handler341";
const app = express()
app.get('/341', handler341)
app.listen(3000, () => {})
        