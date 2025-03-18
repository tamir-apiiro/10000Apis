
const express = require('express')
import {handler2534} from "./handler2534";
const app = express()
app.get('/2534', handler2534)
app.listen(3000, () => {})
        