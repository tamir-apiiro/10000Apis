
const express = require('express')
import {handler7886} from "./handler7886";
const app = express()
app.get('/7886', handler7886)
app.listen(3000, () => {})
        