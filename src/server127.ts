
const express = require('express')
import {handler127} from "./handler127";
const app = express()
app.get('/127', handler127)
app.listen(3000, () => {})
        