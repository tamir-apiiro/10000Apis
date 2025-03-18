
const express = require('express')
import {handler3604} from "./handler3604";
const app = express()
app.get('/3604', handler3604)
app.listen(3000, () => {})
        