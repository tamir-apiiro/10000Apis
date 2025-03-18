
const express = require('express')
import {handler7568} from "./handler7568";
const app = express()
app.get('/7568', handler7568)
app.listen(3000, () => {})
        