
const express = require('express')
import {handler1127} from "./handler1127";
const app = express()
app.get('/1127', handler1127)
app.listen(3000, () => {})
        