
const express = require('express')
import {handler593} from "./handler593";
const app = express()
app.get('/593', handler593)
app.listen(3000, () => {})
        