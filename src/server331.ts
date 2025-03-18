
const express = require('express')
import {handler331} from "./handler331";
const app = express()
app.get('/331', handler331)
app.listen(3000, () => {})
        