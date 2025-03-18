
const express = require('express')
import {handler7137} from "./handler7137";
const app = express()
app.get('/7137', handler7137)
app.listen(3000, () => {})
        