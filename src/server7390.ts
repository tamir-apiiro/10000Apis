
const express = require('express')
import {handler7390} from "./handler7390";
const app = express()
app.get('/7390', handler7390)
app.listen(3000, () => {})
        