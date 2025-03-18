
const express = require('express')
import {handler7956} from "./handler7956";
const app = express()
app.get('/7956', handler7956)
app.listen(3000, () => {})
        