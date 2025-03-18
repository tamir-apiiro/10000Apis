
const express = require('express')
import {handler7306} from "./handler7306";
const app = express()
app.get('/7306', handler7306)
app.listen(3000, () => {})
        