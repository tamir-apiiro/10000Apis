
const express = require('express')
import {handler7736} from "./handler7736";
const app = express()
app.get('/7736', handler7736)
app.listen(3000, () => {})
        