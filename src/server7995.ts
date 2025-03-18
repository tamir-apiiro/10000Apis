
const express = require('express')
import {handler7995} from "./handler7995";
const app = express()
app.get('/7995', handler7995)
app.listen(3000, () => {})
        