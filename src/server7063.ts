
const express = require('express')
import {handler7063} from "./handler7063";
const app = express()
app.get('/7063', handler7063)
app.listen(3000, () => {})
        