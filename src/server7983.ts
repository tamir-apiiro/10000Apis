
const express = require('express')
import {handler7983} from "./handler7983";
const app = express()
app.get('/7983', handler7983)
app.listen(3000, () => {})
        