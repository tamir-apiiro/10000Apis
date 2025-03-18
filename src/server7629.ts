
const express = require('express')
import {handler7629} from "./handler7629";
const app = express()
app.get('/7629', handler7629)
app.listen(3000, () => {})
        