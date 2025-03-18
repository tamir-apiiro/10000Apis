
const express = require('express')
import {handler7951} from "./handler7951";
const app = express()
app.get('/7951', handler7951)
app.listen(3000, () => {})
        