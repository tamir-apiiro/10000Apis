
const express = require('express')
import {handler7607} from "./handler7607";
const app = express()
app.get('/7607', handler7607)
app.listen(3000, () => {})
        