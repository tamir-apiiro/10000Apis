
const express = require('express')
import {handler2956} from "./handler2956";
const app = express()
app.get('/2956', handler2956)
app.listen(3000, () => {})
        