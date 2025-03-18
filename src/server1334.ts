
const express = require('express')
import {handler1334} from "./handler1334";
const app = express()
app.get('/1334', handler1334)
app.listen(3000, () => {})
        