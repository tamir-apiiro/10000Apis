
const express = require('express')
import {handler7661} from "./handler7661";
const app = express()
app.get('/7661', handler7661)
app.listen(3000, () => {})
        