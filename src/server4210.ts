
const express = require('express')
import {handler4210} from "./handler4210";
const app = express()
app.get('/4210', handler4210)
app.listen(3000, () => {})
        