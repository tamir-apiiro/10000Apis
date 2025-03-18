
const express = require('express')
import {handler2622} from "./handler2622";
const app = express()
app.get('/2622', handler2622)
app.listen(3000, () => {})
        