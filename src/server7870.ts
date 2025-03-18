
const express = require('express')
import {handler7870} from "./handler7870";
const app = express()
app.get('/7870', handler7870)
app.listen(3000, () => {})
        